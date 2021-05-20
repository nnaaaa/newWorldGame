const flexible = (
    direction = 'row',
    justifyContent = 'center',
    alignItems = 'center',
) => {
    return {
        display: 'flex',
        flexDirection: direction,
        justifyContent: justifyContent,
        alignItems: alignItems
    }
}

export default flexible