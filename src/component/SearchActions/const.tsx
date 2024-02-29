const TypeList = ['REQUESTED', 'EXPIRED', 'SUSPEND', 'APPROVED', 'ISSUED'] as const;
type OptionValue = typeof TypeList[number]

export const Options: { value: OptionValue, label: OptionValue }[] = [
    {
        value: "APPROVED",
        label: "APPROVED"
    }, {
        value: "EXPIRED",
        label: "EXPIRED"
    },{
        value: "SUSPEND",
        label: "SUSPEND"
    },{
        value: "REQUESTED",
        label: "REQUESTED"
    },{
        value: "ISSUED",
        label: "ISSUED"
    }
]