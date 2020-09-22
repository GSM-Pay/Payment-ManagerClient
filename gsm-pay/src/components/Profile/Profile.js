import React from 'react'
import {
    Container,
    Grid,
    Header,
    Image,
} from 'semantic-ui-react'

import { gql, useQuery } from '@apollo/client'

const FETCH_ME = gql`
    query Me {
        me {
            name
        }
    }
`;

const FETCH_BOOTHS = gql`
    query MyBooths {
        myBooths {
            bid
            name
            createdAt
        }
    }
`;

function Profile() {
    const me = useQuery(FETCH_ME);
    const booths = useQuery(FETCH_BOOTHS);

    if (me.loading || booths.loading || me.error || booths.error) {
        return (
            <Grid.Column mobile={16} tablet={16} computer={16}>
                <Container >
                    <Image src='https://www.flaticon.com/svg/static/icons/svg/2784/2784465.svg' size='small' circular centered />
                    <Header size='large' textAlign='center'>
                        ...
                        <Header.Subheader>...</Header.Subheader>
                    </Header>
                </Container>
            </Grid.Column>
        )
    }

    return (
        <Grid.Column mobile={16} tablet={16} computer={16}>
            <Container >
                <Image src='https://www.flaticon.com/svg/static/icons/svg/2784/2784465.svg' size='small' circular centered />
                <Header size='large' textAlign='center'>
                    {booths.data.myBooths.map(booth => booth.name).join(', ')}
                    <Header.Subheader>{me.data.me.name}</Header.Subheader>
                </Header>
            </Container>
        </Grid.Column>
    )
}

export default Profile;