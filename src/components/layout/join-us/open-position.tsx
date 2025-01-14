import React from 'react'
import styled from 'styled-components'
import { JoinUsContainer, TextContainer } from './home'
import { Header, JoinUsImageContainer, Text } from 'components/containers/main'
import Sinbad0 from 'images/common/openpositions/join-team.png'
import Sinbad from 'images/common/openpositions/join-us-background.png'
import { HeaderTitle, ContainerWrapper } from 'components/containers/common/style'

const Wrapper = styled.div`
    display: flex;
    background-color: var(--color-sand-1);
    background-repeat: no-repeat;
    background-image: url(${Sinbad});
    background-position: bottom center;
    background-size: contain;
    justify-content: center;
    width: 100%;
`

const StyledHeader = styled.div`
    display: flex;
    white-space: nowrap;
    padding-right: 15px;
`

const JoinUsInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`

const JoinUsOpenPositions = () => {
    return (
        <Wrapper>
            <ContainerWrapper>
                <JoinUsContainer>
                    <JoinUsInfo>
                        <StyledHeader>
                            <HeaderTitle
                                color="var(--color-sand-4)"
                                font_family="Maven Pro Bold"
                                padding_right="10px"
                            >
                                Sinbad
                            </HeaderTitle>
                            <HeaderTitle color="var(--color-sand-4)">Software</HeaderTitle>
                        </StyledHeader>
                        <TextContainer>
                            <Header font_size="28px">JOIN OUR TEAM!</Header>
                            <Text padding="20px 0">
                                Is your dream to build great products using leading technologies?
                                Join Sinbad Software, where creativity, talent, and a passion for
                                challenges come together
                            </Text>
                        </TextContainer>
                    </JoinUsInfo>
                    <JoinUsImageContainer src={Sinbad0} />
                </JoinUsContainer>
            </ContainerWrapper>
        </Wrapper>
    )
}

export default JoinUsOpenPositions
