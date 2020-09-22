import React, { Component } from 'react';
import Modal from 'components/Modal'
import {
    Grid,
    Container,
    Menu,
    Header,
    List,
    Image,
    Dropdown,
    Segment
} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
const options = [
    { key: 'Booth1', text: '학생회 부스', value: '학생회 부스' },
    { key: 'Booth2', text: '맛있는 삼겹살', value: '맛있는 삼겹살' },
    { key: 'Booth3', text: '조각조각 피자', value: '조각조각 피자' },
    { key: 'Booth4', text: '뻥아이스크림', value: '뻥아이스크림' },
]
class Payment extends Component {
    state = { }

  handleChange = (e, { value }) => this.setState({ currentValue: value })

    render() {
        const { value } = this.state
        return (
            <div>
                <Menu fixed='top' inverted>
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

                <Grid.Column width={16} style={{ marginTop: '60px', padding: '14px' }}>
                    <List relaxed='very'>
                        <List.Item>
                            <List.Content>
                                <Header size='medium' floated='left'>
                                    <Dropdown
                                        onChange={this.handleChange}
                                        options={options}
                                        placeholder='부스 선택하기'
                                        selection
                                        value={value}
                                    />
                                </Header>
                            </List.Content>
                            <List.Content floated='right'>
                                <Header as='h4' color='grey' textAlign='justified' style={{marginTop:'10px'}}>최신순</Header>
                            </List.Content>
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
                <Segment inverted vertical style={{ padding: '7em 0em', marginTop:'20px'}}>
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
};
export default Payment;