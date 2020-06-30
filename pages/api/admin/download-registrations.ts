import * as fs from "fs";
import {NextApiRequest, NextApiResponse} from 'next'
import {WritingOptions} from "xlsx";
import {getAllRegistrations} from "../../../src/api/getAllRegistrations";
import {localizeDataExport} from "../../../src/api/localizeDataExport";
import {restrictRoute} from "../../../src/api/restrictRoute";
import * as XLSX from 'xlsx';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (await restrictRoute(req, res, "GET", true))
        return
    const data = await getAllRegistrations()

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(localizeDataExport(data.filter((user: any) => user.emailVerified)));
    XLSX.utils.book_append_sheet(wb, ws, 'Anmeldungen');

    const d = new Date()
    const filename = `Anmeldungen-${d.getDate()}_${d.getMonth() + 1}_${d.getFullYear()}.xlsx`
    const wb_opts: WritingOptions = {bookType: 'xlsx', type: 'binary'};
    XLSX.writeFile(wb, filename, wb_opts);
    const stream = fs.createReadStream(filename);
    res.writeHead(200, {
        'Content-Type': 'application/xlsx',
        'Content-disposition': `attachment; filename=${filename}`
    });
    stream.pipe(res);
    fs.unlink(filename, () => {
    })
}