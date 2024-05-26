import React from 'react'
import {Chart as ChartJs, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js'

import {Line} from 'react-chartjs-2'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext'
import { dateFormat } from '../../utils/dateFormat'

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
)

function Chart() {
    const {incomes, expenses} = useGlobalContext()

    // Sort incomes and expenses by date
    const sortedIncomes = incomes.slice().sort((a, b) => new Date(a.date) - new Date(b.date))
    const sortedExpenses = expenses.slice().sort((a, b) => new Date(a.date) - new Date(b.date))

    const data = {
        labels: sortedIncomes.map((inc) => {
            const { date } = inc
            return dateFormat(date)
        }),
        datasets: [
            {
                label: 'Thu nhập',
                data: sortedIncomes.map((income) => {
                    const { amount } = income
                    return amount
                }),
                backgroundColor: 'green',
                tension: .2
            },
            {
                label: 'Chi tiêu',
                data: sortedExpenses.map((expense) => {
                    const { amount } = expense
                    return amount
                }),
                backgroundColor: 'red',
                tension: .2
            }
        ]
    }

    return (
        <ChartStyled >
            <Line data={data} />
        </ChartStyled>
    )
}

const ChartStyled = styled.div`
    background: #FFFFFF;
    border: 2px solid #FCF6F9;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 100%;
    width: 100%;
`;

export default Chart