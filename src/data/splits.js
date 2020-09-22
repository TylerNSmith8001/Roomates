let splits = [
    {
        id: 1,
        name: "Rent",
        startDate: "2020-01-01",
        endDate: "",
        period: "monthly",
        instances:[
            {
                id: 1,
                date:"2020-09-01",
                splitType:"explicit",
                total: 1050,
                roommates:[
                    {
                        roommateId: 1,
                        split: 350
                    },
                    {
                        roommateId: 3,
                        split: 400
                    },
                    {
                        roommateId: 5,
                        split: 250
                    }
                ]
            }
        ]
    }
];

export default splits;