export const allurls:{url:string, validity:number, shortcode:string, expiry:any}[] = []

export function findUrl(shortcode:string){
    return allurls.filter(curr => curr.shortcode==shortcode)
}

export function uploadUrl(data:{url:string, validity:number, shortcode:string, expiry:any}){
    allurls.push(data)
}