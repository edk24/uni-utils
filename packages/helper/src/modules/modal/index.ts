/**
 * 打开操作菜单
 * 
 * @param options 
 * @param callback 
 */
export function showActionSheet(options: string[], callback: (index: number) => void): void {
    uni.showActionSheet({
        itemList: options,
        success: (res) => {
            callback(res.tapIndex);
        }
    });
}

/**
 * 打开确认对话框
 * 
 * @param title 
 * @param content 
 * @param confirmText 
 * @param cancelText 
 * @param callback 
 */
export function showModal(title: string, content: string, confirmText: string = '确认', cancelText: string = '取消', callback: (confirmed: boolean) => void): void {
    uni.showModal({
        title,
        content,
        confirmText,
        cancelText,
        success: (res) => {
            callback(res.confirm);
        }
    });
}