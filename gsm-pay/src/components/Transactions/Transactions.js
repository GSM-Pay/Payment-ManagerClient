import {
    Image,
    List,
} from 'semantic-ui-react'
import React from 'react'
import Modal from 'components/Modal'

import { gql, useQuery } from '@apollo/client'

const FETCH_TRANSACTIONS = gql`
    query Transactions {
        transactions {
            tid
            user {
                pid
                id
                pw
                name
                grade
                class
                number
                amount
                createdAt
                updatedAt
            }
            booth {
                bid
                name
                pid
                createdAt
                updatedAt
            }
            amount
            createdAt
            updatedAt
        }
    }
`

function Transactions() {
    const { loading, error, data } = useQuery(FETCH_TRANSACTIONS);

    let items;

    if (loading) {
        items = (
            <h3>잠시만 기다려주세요.</h3>
        )
    } else if (error) {
        items = (
            <h3>오류가 발생했습니다.</h3>
        )
    } else {
        items = data.transactions.map((value, index) => {
            return (
                <List.Item key={index}>
                    <Image avatar src='https://www.flaticon.com/svg/static/icons/svg/2657/2657025.svg' />
                    <List.Content>
                        <List.Header as='a'>+{value.amount}원</List.Header>
                        <List.Description>
                            {value.user.name} → {value.booth.name}
                        </List.Description>
                    </List.Content>
                    <List.Content floated='right'>
                        <Modal transaction={value}/>
                    </List.Content>
                </List.Item>
            );
        })
    }

    return items;
}

export default Transactions;