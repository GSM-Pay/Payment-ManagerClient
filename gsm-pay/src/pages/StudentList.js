import React, { Component } from 'react';
import Point from 'components/Point'
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
    { key: '11', text: '1학년 1반', value: '1학년 1반' },
    { key: '12', text: '1학년 2반', value: '1학년 2반' },
    { key: '13', text: '1학년 3반', value: '1학년 3반' },
    { key: '14', text: '1학년 4반', value: '1학년 4반' },
    { key: '21', text: '2학년 1반', value: '2학년 1반' },
    { key: '22', text: '2학년 2반', value: '2학년 2반' },
    { key: '23', text: '2학년 3반', value: '2학년 3반' },
    { key: '24', text: '2학년 4반', value: '2학년 4반' },
    { key: '31', text: '3학년 1반', value: '3학년 1반' },
    { key: '32', text: '3학년 2반', value: '3학년 2반' },
    { key: '33', text: '3학년 3반', value: '3학년 3반' },
    { key: '34', text: '3학년 4반', value: '3학년 4반' },
]
class StudentList extends Component {
    state = {}

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
                                        placeholder='학년 반 선택하기'
                                        selection
                                        value={value}
                                    />
                                </Header>
                            </List.Content>
                            <List.Content floated='right'>
                                <Header as='h4' color='grey' textAlign='justified' style={{ marginTop: '10px' }}>번호순</Header>
                            </List.Content>
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

                        <List.Item style={{ padding: '12px' }}>
                            <List.Content floated='right'>
                                <Point />
                            </List.Content>
                            <Image avatar src='https://www.flaticon.com/svg/static/icons/svg/2784/2784461.svg' />
                            <List.Content>박건도</List.Content>
                        </List.Item>

                        <List.Item style={{ padding: '12px' }}>
                            <List.Content floated='right'>
                                <Point />
                            </List.Content>
                            <Image avatar src='https://www.flaticon.com/svg/static/icons/svg/2784/2784461.svg' />
                            <List.Content>신엽</List.Content>
                        </List.Item>

                        <List.Item style={{ padding: '12px' }}>
                            <List.Content floated='right'>
                                <Point />
                            </List.Content>
                            <Image avatar src='https://www.flaticon.com/svg/static/icons/svg/2784/2784461.svg' />
                            <List.Content>신주원</List.Content>
                        </List.Item>

                        <List.Item style={{ padding: '12px' }}>
                            <List.Content floated='right'>
                                <Point />
                            </List.Content>
                            <Image avatar src='https://www.flaticon.com/svg/static/icons/svg/2784/2784461.svg' />
                            <List.Content>이성범</List.Content>
                        </List.Item>

                        <List.Item style={{ padding: '12px' }}>
                            <List.Content floated='right'>
                                <Point />
                            </List.Content>
                            <Image avatar src='https://www.flaticon.com/svg/static/icons/svg/2784/2784465.svg' />
                            <List.Content>이세연</List.Content>
                        </List.Item>

                        <List.Item style={{ padding: '12px' }}>
                            <List.Content floated='right'>
                                <Point />
                            </List.Content>
                            <Image avatar src='https://www.flaticon.com/svg/static/icons/svg/2784/2784461.svg' />
                            <List.Content>이의현</List.Content>
                        </List.Item>

                        <List.Item style={{ padding: '12px' }}>
                            <List.Content floated='right'>
                                <Point />
                            </List.Content>
                            <Image avatar src='https://www.flaticon.com/svg/static/icons/svg/2784/2784461.svg' />
                            <List.Content>임태건</List.Content>
                        </List.Item>

                    </List>
                </Grid.Column>
                <Segment inverted vertical style={{ padding: '7em 0em', marginTop: '20px' }}>
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
export default StudentList;