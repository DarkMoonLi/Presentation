type Application = {
    Presentation:
        {
            title: string,
            slides:
                [
                    slide:
                        {
                            id: number,
                            background: string,
                            text:
                                [
                                    {
                                        id: number,
                                        font: string,
                                        fontSize: number,
                                        color: string,
                                        content: string,
                                    }
                                ];
                            image:
                                [
                                    {
                                        id: number,
                                        size:
                                            {
                                                width: number,
                                                height: number,
                                            };
                                        link: string,
                                    }
                                ];
                            primitives:
                                [
                                    circles:
                                    [
                                        {
                                            id: number,
                                            size: {
                                                width: number,
                                                height: number
                                            },
                                            center: {
                                                x: number,
                                                y: number
                                            },
                                            radius: number
                                        }
                                    ],

                                    triangles: 
                                    [
                                        {
                                            id: number,
                                            size: {
                                                width: number,
                                                height: number
                                            },
                                            position: {
                                                x: number,
                                                y: number
                                            }
                                        }
                                    ],

                                    rectangles: 
                                    [
                                        {
                                            id: number,
                                            size: {
                                                width: number,
                                                height: number
                                            },
                                            position: {
                                                x: number,
                                                y: number
                                            }
                                        }
                                    ]
                                ]
                        }
                ]
        }
}