export type LinkType = {

    id: number,
    name: string,
    refId: string,

};

export type CardType = {

    name?: string,
    // link: string,
    image: string,
    cardType: string,
    id: number
    // refId: string,

};


export type FooterType = {

    name: string,
    emails: any[ ],
    addresses: any[ ],
    signature: any[ ]
}
