import openpyxl


def get_excel_preview_data(file_bytes):
    """
    Return the two first line of the provided excel file
    Will throw an error in the file has more than one sheet
    """
    wb = openpyxl.load_workbook(file_bytes)
    sheets_count = len(wb._sheets)
    if sheets_count > 1:
        raise TooManySheetsException(sheets_count)
    ws = wb.active
    data = []
    for row in ws.iter_rows(min_row=1, max_row=2):
        data.append([cell.value for cell in row])
    return data


class TooManySheetsException(Exception):
    """

    """

    def __init__(self, sheets_count, message="Too many sheets in file (%s)"):
        self.sheets_count = sheets_count
        self.message = message % self.sheets_count
        super().__init__(self.message)
