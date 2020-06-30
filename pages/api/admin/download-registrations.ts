import {NextApiRequest, NextApiResponse} from 'next'
import * as XLSX from "xlsx";
import {getAllRegistrations} from "../../../src/api/getAllRegistrations";
import {localizeDataExport} from "../../../src/api/localizeDataExport";
import {restrictRoute} from "../../../src/api/restrictRoute";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (await restrictRoute(req, res, "GET", true))
        return
    const data = await getAllRegistrations()

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(localizeDataExport(data.filter((user: any) => user.emailVerified)));
    XLSX.utils.book_append_sheet(wb, ws, 'Anmeldungen');

    const d = new Date()
    const filename = `Anmeldungen-${d.getDate()}_${d.getMonth() + 1}_${d.getFullYear()}.xlsx`
    const wbBuffer = XLSX.writeFile(wb, filename, {bookType: 'xlsx', type: 'buffer'});
    res.writeHead(200, {
        'Content-Type': 'application/xlsx',
        'Content-disposition': `attachment; filename=${filename}`
    });
    res.send(wbBuffer)

}