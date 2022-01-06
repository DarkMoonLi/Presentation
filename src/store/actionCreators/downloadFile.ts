import { download, upload } from "../actions/download";

export function downloadFile(presentationTitle: string) {
    return {
        type: download,
        value: presentationTitle
    }
}

export function uploadFile(filePath: string) {
    return {
        type: upload,
        value: filePath
    }
}