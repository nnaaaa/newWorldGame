const text = ({
    color = 'white',
    fontSize = '16',
    fontWeight = '400',
    shadowColor = 'rgba(0,0,0,0.6)',
    textAlign = 'center'
}) => {
    return {
        color: color,
        fontSize: fontSize,
        fontWeight: fontWeight,
        textShadow: `0 5px 10px ${shadowColor}`,
        textAlign: textAlign
    }
}

export default text