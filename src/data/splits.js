let splits = [
    {
        id: 1,
        name: "Rent",
        startDate: "2020-01-01",
        endDate: null,
        period: "monthly",
        instances:[
            {
                id: 1,
                date:"2020-09-01",
                splitType:"explicit",
                total: 1050,
                roommates:[
                    {
                        id: 1,
                        roommateId: 1,
                        split: 400
                    },
                    {
                        id: 2,
                        roommateId: 3,
                        split: 400
                    },
                    {
                        id: 3,
                        roommateId: 4,
                        split: 250
                    }
                ]
            }
        ]
    }
];

export default splits;