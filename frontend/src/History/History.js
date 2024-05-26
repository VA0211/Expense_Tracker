import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/globalContext';

function nWCom(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function History() {
    const {transactionHistory} = useGlobalContext()

    const [...history] = transactionHistory()

    return (
        <HistoryStyled>
            <h2>Lịch sử thu chi</h2>
            {history.map((item) =>{
                const {_id, title, amount, type} = item
                return (
                    <div key={_id} className="history-item">
                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {title}
                        </p>

                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {
                                type === 'expense' ? `-${nWCom(amount <= 0 ? 0 : amount)}đ` : `+${nWCom(amount <= 0 ? 0: amount)}đ`
                            }
                        </p>
                    </div>
                )
            })}
        </HistoryStyled>
    )
}

const HistoryStyled = styled.div`
    --background-color: #FFFFFF;
    --border-color: #FCF6F9;
    --box-shadow-color: rgba(0, 0, 0, 0.06);

    display: flex;
    flex-direction: column;
    gap: 1rem;
    .history-item{
        background: var(--background-color);
        border: 2px solid var(--border-color);
        box-shadow: 0px 1px 15px var(--box-shadow-color);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export default History