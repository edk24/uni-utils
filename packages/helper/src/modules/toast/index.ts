
/**
 * 显示消息提示
 * 
 * @param message 
 * @param icon 
 * @param duration 
 * @returns 
 */
export function showToast(message: string, icon: 'none' | 'success' | 'error' = 'none', duration: number = 2000): () => void {
    uni.showToast({
        title: message,
        icon,
        duration
    });

    return () => {
        uni.hideToast();
    };
}

/**
 * 显示成功提示
 * 
 * @param message 
 * @param duration 
 * @returns 
 */
export function showSuccessToast(message: string, duration: number = 2000): () => void {
    return showToast(message, 'success', duration);
}

/**
 * 显示错误提示
 * 
 * @param message 
 * @param duration 
 * @returns 
 */
export function showErrorToast(message: string, duration: number = 2000): () => void {
    return showToast(message, 'error', duration);
}

/**
 * 显示加载中提示
 * 
 * @param message 
 * @returns 
 */
export function showLoading(message: string): () => void {
    uni.showLoading({
        title: message,
        mask: true,
    });

    return () => {
        uni.hideLoading();
    };
}

