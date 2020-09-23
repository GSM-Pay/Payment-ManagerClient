import React from 'react'
import Transactions from 'components/Transactions'
import Users from 'components/Users'
import Profile from 'components/Profile'

import { Link, useHistory } from 'react-router-dom';

import {
    Container,
    Grid,
    Header,
    List,
    Menu,
    Segment,
    Divider
} from 'semantic-ui-react'

function FixedLayout() {
    let history = useHistory()

    if (!localStorage.getItem('session')) history.replace('/login')
    
    return (
        <div>
            <Menu fixed='top' inverted style={{ paddingLeft: '14px' }}>
                <Container >
                    <Menu.Item as='a' icon='align justify'></Menu.Item>

                    <Menu.Item as='a' header as={Link} to='/'>
                        GSM Pay
                    </Menu.Item>

                    <Menu.Menu position='right'>
                        <Menu.Item as='a' onClick={() => {
                            localStorage.removeItem('session')
                            window.location.reload()
                        }}>로그아웃</Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
            <Divider section />
            <div className="ui grid" style={{ marginTop: '30px', marginBottom: '20px', paddingLeft: '14px' }}>
                <Profile />

                <Grid.Column mobile={16} tablet={8} computer={8}>
                    <List relaxed='very'>
                        <List.Item>
                            <Header size='medium' floated='left'>최근 내역</Header>
                            <Link to='/Payment'><Header floated='right' icon='arrow right' size='small'></Header></Link>
                        </List.Item>
                        <Transactions />
                    </List>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={8} computer={8}>
                    <List divided verticalAlign='middle'>
                        <List.Item style={{ marginBottom: '12px' }}>
                            <Header size='medium' floated='left'>학생 리스트</Header>
                            <Link to='/studentlist'><Header floated='right' icon='arrow right' size='small'></Header></Link>
                        </List.Item>
                        <Users />
                    </List>
                </Grid.Column>
            </div>
            <Segment inverted vertical style={{ padding: '7em 0em' }}>
                <Container>
                    <Grid divided inverted stackable>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Header inverted as='h4' content='About' />
                                <List link inverted>
                                    <List.Item as='a'>이용 약관</List.Item>
                                    <List.Item as='a'>개인 정보 정책</List.Item>
                                </List>
                            </Grid.Column>

                            <Grid.Column width={10}>
                                <Header as='h4' inverted>
                                    GSM Pay
                                </Header>
                                <p>
                                    학교 축제를 진행하면서 발생하는 잔돈 수급 문제나 수익금 정산 문제를 간단하게 해결해줍니다.
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </div>
    )
}

export default FixedLayout

