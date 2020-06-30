export const getSite = () => process.env.NEXT_PUBLIC_SITE ? `https://${process.env.NEXT_PUBLIC_SITE}` : 'http://localhost:3000'
