/**
 * 打开操作菜单
 *
 * @param options
 * @param callback
 */
export function showActionSheet(options, callback) {
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
export function showModal(title, content, confirmText = '确认', cancelText = '取消', callback) {
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
