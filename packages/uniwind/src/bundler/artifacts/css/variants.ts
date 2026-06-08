const variants = ['ios', 'android', 'web', 'native', 'tv', 'android-tv', 'apple-tv', 'tablet'];

const generateCSSForVariants = () => {
    let css = ''

    variants.forEach(variant => {
        css += `@custom-variant ${variant} (${variant === 'web' ? 'html &' : `@media ${variant}`});\n`
    })

    return css
}

export const VARIANTS_CSS = generateCSSForVariants()
