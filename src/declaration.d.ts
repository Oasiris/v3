declare module '*.css' {
    const mapping: Record<string, string>
    export default mapping
}

declare module '*.scss' {
    const mapping: Record<string, string>
    // const mapping: string
    export default mapping
}

declare module '*.svg' {
    const mapping: string
    export default mapping
}

// Extend LinkProps to include href
declare module 'preact-router/match' {
    interface LinkProps {
        href?: string;
    }
}
