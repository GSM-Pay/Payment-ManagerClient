import React from 'react'
import Modal from 'components/Modal'
import Point from 'components/Point'

import { BrowserRouter as Router, Link } from 'react-router-dom';

import {
    Container,
    Grid,
    Header,
    Image,
    List,
    Menu,
    Segment,
    Divider
} from 'semantic-ui-react'

const FixedLayout = () => (
    <div>
        <Menu fixed='top' inverted style={{ paddingLeft: '14px' }}>
            <Container >
                <Menu.Item as='a' icon='align justify'></Menu.Item>

                <Menu.Item as='a' header as={Link} to='/'>
                    GSM Pay
                </Menu.Item>

                <Menu.Menu position='right'>
                    <Menu.Item as='a'>로그아웃</Menu.Item>
                </Menu.Menu>
            </Container>
        </Menu>
        <Divider section />
        <div className="ui grid" style={{ marginTop: '30px', marginBottom: '20px', paddingLeft: '14px' }}>
            <Grid.Column mobile={16} tablet={16} computer={16}>
                <Container >
                    <Image src='https://www.flaticon.com/svg/static/icons/svg/2784/2784465.svg' size='small' circular centered />
                    <Header size='large' textAlign='center'>
                        학생회 부스
            <Header.Subheader>노아련</Header.Subheader>
                    </Header>
                </Container>
            </Grid.Column>

            <Grid.Column mobile={16} tablet={8} computer={8}>
                <List relaxed='very'>
                    <List.Item>
                        <Header size='medium' floated='left'>최근 내역</Header>
                        <Link to='/Payment'><Header floated='right' icon='arrow right' size='small'></Header></Link>
                    </List.Item>

                    <List.Item>
                        <Image avatar src='https://www.flaticon.com/svg/static/icons/svg/2657/2657025.svg' />
                        <List.Content>
                            <List.Header as='a'>+3000원</List.Header>
                            <List.Description>
                                최호승 → 맛있는 삼겹살
                    </List.Description>
                        </List.Content>
                        <List.Content floated='right'>
                            <Modal />
                        </List.Content>
                    </List.Item>

                    <List.Item>
                        <Image avatar src='https://www.flaticon.com/svg/static/icons/svg/2657/2657025.svg' />
                        <List.Content>
                            <List.Header as='a'>+1000원</List.Header>
                            <List.Description>
                                최연진 → 맛있는 삼겹살
                    </List.Description>
                        </List.Content>
                        <List.Content floated='right'>
                            <Modal />
                        </List.Content>
                    </List.Item>

                    <List.Item>
                        <Image avatar src='https://www.flaticon.com/svg/static/icons/svg/2657/2657025.svg' />
                        <List.Content>
                            <List.Header as='a'>+1000원</List.Header>
                            <List.Description>
                                박준영 → 맛있는 삼겹살
                    </List.Description>
                        </List.Content>
                        <List.Content floated='right'>
                            <Modal />
                        </List.Content>
                    </List.Item>

                    <List.Item>
                        <Image avatar src='https://www.flaticon.com/svg/static/icons/svg/2657/2657025.svg' />
                        <List.Content>
                            <List.Header as='a'>+3000원</List.Header>
                            <List.Description>
                                이진혁 → 맛있는 삼겹살
                    </List.Description>
                        </List.Content>
                        <List.Content floated='right'>
                            <Modal />
                        </List.Content>
                    </List.Item>

                    <List.Item>
                        <Image avatar src='https://www.flaticon.com/svg/static/icons/svg/2657/2657025.svg' />
                        <List.Content>
                            <List.Header as='a'>+1000원</List.Header>
                            <List.Description>
                                김서빈 → 학생회 부스
                    </List.Description>
                        </List.Content>
                        <List.Content floated='right'>
                            <Modal />
                        </List.Content>
                    </List.Item>

                    <List.Item>
                        <Image avatar src='https://www.flaticon.com/svg/static/icons/svg/2657/2657025.svg' />
                        <List.Content>
                            <List.Header as='a'>+1500원</List.Header>
                            <List.Description>
                                노아련 → 조각조각 피자
                    </List.Description>
                        </List.Content>
                        <List.Content floated='right'>
                            <Modal />
                        </List.Content>
                    </List.Item>
                </List>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={8}>
                <List divided verticalAlign='middle'>
                    <List.Item style={{ marginBottom: '12px' }}>
                        <Header size='medium' floated='left'>학생 리스트</Header>
                        <Link to='/studentlist'><Header floated='right' icon='arrow right' size='small'></Header></Link>
                    </List.Item>

                    <List.Item style={{ padding: '12px' }}>
                        <List.Content floated='right'>
                            <Point />
                        </List.Content>
                        <Image avatar src='https://www.flaticon.com/svg/static/icons/svg/2784/2784461.svg' />
                        <List.Content>곽은상</List.Content>
                    </List.Item>

                    <List.Item style={{ padding: '12px' }}>
                        <List.Content floated='right'>
                            <Point />
                        </List.Content>
                        <Image avatar src='https://www.flaticon.com/svg/static/icons/svg/2784/2784465.svg' />
                        <List.Content>김규리</List.Content>
                    </List.Item>

                    <List.Item style={{ padding: '12px' }}>
                        <List.Content floated='right'>
                            <Point />
                        </List.Content>
                        <Image avatar src='https://www.flaticon.com/svg/static/icons/svg/2784/2784461.svg' />
                        <List.Content>김재남</List.Content>
                    </List.Item>

                    <List.Item style={{ padding: '12px' }}>
                        <List.Content floated='right'>
                            <Point />
                        </List.Content>
                        <Image avatar src='https://www.flaticon.com/svg/static/icons/svg/2784/2784461.svg' />
                        <List.Content>김지웅</List.Content>
                    </List.Item>

                    <List.Item style={{ padding: '12px' }}>
                        <List.Content floated='right'>
                            <Point />
                        </List.Content>
                        <Image avatar src='https://www.flaticon.com/svg/static/icons/svg/2784/2784461.svg' />
                        <List.Content>남승우</List.Content>
                    </List.Item>

                    <List.Item style={{ padding: '12px' }}>
                        <List.Content floated='right'>
                            <Point />
                        </List.Content>
                        <Image avatar src='https://www.flaticon.com/svg/static/icons/svg/2784/2784465.svg' />
                        <List.Content>노아련</List.Content>
                    </List.Item>

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
export default FixedLayout

