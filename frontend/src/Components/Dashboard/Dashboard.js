import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import History from '../../History/History';
import { InnerLayout } from '../../styles/Layouts';
import Chart from '../Chart/Chart';

function nWCom(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function Dashboard() {
    const { totalExpenses, incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()

    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])

    return (
        <DashboardStyled>
            <InnerLayout>
                <h1>Tất cả giao dịch</h1>
                <div className="stats-con">
                    <div className="chart-con">
                        <Chart />
                        <div className="amount-con">
                            <div className="income">
                                <h2>Tổng thu nhập</h2>
                                <p>
                                    {nWCom(totalIncome())}đ
                                </p>
                            </div>
                            <div className="expense">
                                <h2>Tổng chi tiêu</h2>
                                <p>
                                    {nWCom(totalExpenses())}đ
                                </p>
                            </div>
                            <div className="balance">
                                <h2>Tổng số dư</h2>
                                <p>
                                    {nWCom(totalBalance())}đ
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="history-con">
                        <History />
                        <h2 className="salary-title">Min <span>Thu nhập</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                {nWCom(Math.min(...incomes.map(item => item.amount)))}đ
                            </p>
                            <p>
                                {nWCom(Math.max(...incomes.map(item => item.amount)))}đ
                            </p>
                        </div>
                        <h2 className="salary-title">Min <span>Chi tiêu</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                {nWCom(Math.min(...expenses.map(item => item.amount)))}đ
                            </p>
                            <p>
                                {nWCom(Math.max(...expenses.map(item => item.amount)))}đ
                            </p>
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`
    --max-width-1: 1300px;
    --font-size-1: 1.2rem;
    --max-width-2: 1000px;
    --font-size-2: 1rem;
    --max-width-3: 950px;
    --font-size-3: 0.5rem;

    h1 {
        border: 1px;
        margin-bottom: 0.5em;
    }
    .stats-con {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;
        .chart-con {
            grid-column: 1 / 4;
            height: 400px;
            .amount-con {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 2rem;
                margin-top: 2rem;
                .income, .expense {
                    grid-column: span 2;
                }
                .income, .expense, .balance {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    background: #FFFFFF;
                    border: 2px solid #FCF6F9;
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                    border-radius: 20px;
                    padding: 1rem;
                    p {
                        font-size: 2rem;
                        font-weight: 700;
                        @media (max-width: var(--max-width-1)) {
                            font-size: var(--font-size-1);
                        }
                        @media (max-width: var(--max-width-2)) {
                            font-size: var(--font-size-2);
                        }
                        @media (max-width: var(--max-width-3)) {
                            font-size: var(--font-size-3);
                        }
                    }
                }

                .balance {
                    grid-column: 2 / 4;
                    p {
                        color: var(--color-green);
                        opacity: 0.6;
                        font-size: 2.5rem;
                        @media (max-width: var(--max-width-1)) {
                            font-size: var(--font-size-1);
                        }
                        @media (max-width: var(--max-width-2)) {
                            font-size: var(--font-size-2);
                        }
                        @media (max-width: var(--max-width-3)) {
                            font-size: var(--font-size-3);
                        }
                    }
                }
            }
        }

        .history-con {
            grid-column: 4 / -1;
            h2 {
                margin: 1rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .salary-title {
                font-size: 1.2rem;
                span {
                    font-size: 1.8rem;
                }
            }
            .salary-item {
                background: #FFFFFF;
                border: 2px solid #FCF6F9;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                padding: 1rem;
                border-radius: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                p {
                    font-weight: 600;
                    font-size: 1.6rem;
                    @media (max-width: var(--max-width-1)) {
                        font-size: var(--font-size-1);
                    }
                    @media (max-width: var(--max-width-2)) {
                        font-size: var(--font-size-2);
                    }
                    @media (max-width: var(--max-width-3)) {
                        font-size: var(--font-size-3);
                    }
                }
            }
        }
    }
`;

export default Dashboard;