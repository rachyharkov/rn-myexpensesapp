import { FlatList, Text, View } from "react-native"
import ExpensesList from "./ExpensesList"
import ExpensesSummary from "./ExpensesSummary"

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'New TV',
        amount: 799.49,
        date: new Date('2021-12-19')
    },
    {
        id: 'e2',
        description: 'A new desk (wooden)',
        amount: 450,
        date: new Date('2022-01-01')
    },
    {
        id: 'e3',
        description: 'Car Insurance',
        amount: 250,
        date: new Date('2022-02-01')
    },
    {
        id: 'e4',
        description: 'anu',
        amount: 31,
        date: new Date('2022-02-04')
    }
]

function ExpensesOutput({ expenses, expensesPeriod }) {
    return (
        <View>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}/>
            <ExpensesList expenses={DUMMY_EXPENSES} />
        </View>
    )
}

export default ExpensesOutput