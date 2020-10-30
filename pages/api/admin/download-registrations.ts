import {NextApiRequest, NextApiResponse} from 'next'
import * as XLSX from "xlsx";
import {getAllRegistrations} from "../../../src/api/getAllRegistrations";
import {localizeDataExport} from "../../../src/api/localizeDataExport";
import {restrictRoute} from "../../../src/api/restrictRoute";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (await restrictRoute(req, res, "GET", true))
        return
    const data = await getAllRegistrations()

    const d = new Date()
    const filename = `Anmeldungen-${d.getDate()}_${d.getMonth() + 1}_${d.getFullYear()}.xlsx`

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(localizeDataExport(data.filter((user: any) => user.emailVerified)));
    XLSX.utils.book_append_sheet(wb, ws, "Anmeldungen");
    const wbout = XLSX.write(wb, {
        type: 'buffer',
        bookType: "xlsx",
        bookSST: false
    });

    res.setHeader('Content-Type', 'application/octet-stream');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.send(wbout);
}