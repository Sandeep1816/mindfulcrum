import * as XLSX from "xlsx"
import fs from "fs"

export function saveAppointmentToExcel(data: any) {
  const filePath = "appointments.xlsx"

  let workbook
  if (fs.existsSync(filePath)) {
    workbook = XLSX.readFile(filePath)
  } else {
    workbook = XLSX.utils.book_new()
  }

  const sheetName = "Appointments"

  let sheet = workbook.Sheets[sheetName]
  let existingData = sheet ? XLSX.utils.sheet_to_json(sheet) : []

  existingData.push(data)

  const newSheet = XLSX.utils.json_to_sheet(existingData)
  workbook.Sheets[sheetName] = newSheet

  if (!workbook.SheetNames.includes(sheetName)) {
    workbook.SheetNames.push(sheetName)
  }

  XLSX.writeFile(workbook, filePath)
}