type Application = {
    Presentation:
        {
            title: string;
            slides:
                [
                    slide:
                        {
                            id: number;
                            background: string;
                            text:
                                [
                                    {
                                        id: number;
                                        font: string;
                                        fontSize: number;
                                        color: string;
                                        content: string;
                                    }
                                ];
                            image:
                                [
                                    {
                                        size:
                                            {
                                                width: number;
                                                height: number;
                                            };
                                        link: string;
                                    }
                                ];
                            primitives:
                                [
                                    {
                                        circle:
                                            {
                                                size: {
                                                    width: number,
                                                    height: number
                                                },
                                                center: {
                                                    x: number,
                                                    y: number
                                                },
                                                radius: number

                                            },
                                        triangle: {
                                            size: {
                                                width: number,
                                                height: number
                                            },
                                            position: {
                                                x: number,
                                                y: number
                                            }
                                        },
                                        rectangle: {
                                            size: {
                                                width: number,
                                                height: number
                                            },
                                            position: {
                                                x: number,
                                                y: number
                                            }
                                        }
                                    }]

                        }
                ]
        }
}