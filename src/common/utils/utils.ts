export const globalErrorHandler = (e: any, res: any) => {
    return res.status(500).json({ message: e ?? 'Something went wrong' });
}