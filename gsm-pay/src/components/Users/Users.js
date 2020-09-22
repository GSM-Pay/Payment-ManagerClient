import React from 'react'
import {
    Image,
    List,
} from 'semantic-ui-react'
import Point from 'components/Point'

import { gql, useQuery } from '@apollo/client'

const FETCH_USERS = gql`
    query Users {
        users {
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
    }
`

function Users() {
    const { loading, error, data } = useQuery(FETCH_USERS)

    let items

    if (loading) {
        items = (
            <h3>잠시만 기다려주세요.</h3>
        )
    } else if (error) {
        items = (
            <h3>오류가 발생했습니다.</h3>
        )
    } else {
        items = data.users.map((value, index) => {
            return (
                <List.Item key={index} style={{ padding: '12px' }}>
                    <List.Content floated='right'>
                        <Point user={value}/>
                    </List.Content>
                    <Image avatar src='https://www.flaticon.com/svg/static/icons/svg/2784/2784461.svg' />
                    <List.Content>{value.name}</List.Content>
                </List.Item>
            )
        })
    }

    return items;
}

export default Users