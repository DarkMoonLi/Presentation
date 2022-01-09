import { download, upload } from "../actions/download";

export function downloadFile(presentationTitle: string) {
    return {
        type: download,
        value: presentationTitle
    }
}

export function uploadFile() {
    return {
        type: upload
    }
}