import React from 'react'
import styled from 'styled-components'
import { JobTitleProps } from './data'
import { ContainerWrapper, Flex, Header } from 'components/containers'
import { Challenges, Team, Requirements, GoodToHave, Arrow } from 'images/common/jd'

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const DescriptionContainerWrapper = styled(ContainerWrapper)`
    padding: 50px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const StyledHeader = styled(Header)`
    text-transform: uppercase;
    color: var(--color-sand-4);
    font-size: 3.8rem;
    line-height: 50px;
    font-weight: 560;
    font-family: ${(props) => props.font_family || 'Maven Pro Bold'};
`

const HeaderImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-top: 30px;
`

const JDContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 60px;
`

const Card = styled(Flex)`
    display: flex;
    flex-direction: column;
    max-width: 1190px;
    min-height: 243px;
    margin: 20px 0;
    box-shadow: rgba(14, 14, 14, 0.1) 0 4px 8px 0;
    background-color: var(--color-white);
    border-radius: 4px;
    justify-content: center;
    padding: 50px 0;
`

const StyledImg = styled.img`
    padding-right: 50px;
    align-items: flex-end;
`

const ArrowImage = styled.img<{ margin?: string }>`
    width: 23px;
    height: 23px;
    margin-top: 3px;
`

const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    padding: 50px 0 50px 75px;
`
const StyledListItem = styled.li<{ pb?: string }>`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    color: var(--color-black-3);
    padding-left: 5px;
    max-width: 850px;
    padding-bottom: ${(props) => props.pb || 'unset'};
`

const StyledText = styled.div<{ font_family?: string; padding?: string }>`
    font-size: 1.9rem;
    line-height: 33px;
    color: var(--color-black-2);
    font-weight: 320;
    text-align: left;
    font-family: ${(props) => props.font_family || 'Poppins'};
    padding: ${(props) => props.padding || 'unset'};
    display: flex;
    align-items: center;
    padding-left: 10px;
`

const Description = ({ position }: JobTitleProps) => {
    return (
        <DescriptionContainer>
            <DescriptionContainerWrapper>
                <JDContainer>
                    <Card ai="center">
                        {position.description.map((paragraph, index) => {
                            return (
                                <StyledText padding="15px 75px" key={index}>
                                    {paragraph}
                                </StyledText>
                            )
                        })}
                    </Card>

                    <Card direction="column">
                        <HeaderImageContainer>
                            <StyledHeader>Your challenges</StyledHeader>
                            <StyledImg src={Challenges} />
                        </HeaderImageContainer>
                        <StyledList>
                            {position.challenges.map((challenge, index) => {
                                return (
                                    <StyledListItem key={index}>
                                        <ArrowImage src={Arrow} />
                                        <StyledText>{challenge}</StyledText>
                                    </StyledListItem>
                                )
                            })}
                        </StyledList>
                    </Card>
                    <Card direction="column">
                        <HeaderImageContainer>
                            <StyledHeader>Our Team</StyledHeader>
                            <StyledImg src={Team} />
                        </HeaderImageContainer>
                        <StyledText padding="15px 75px 50px">{position.team}</StyledText>
                    </Card>
                    <Card direction="column">
                        <HeaderImageContainer>
                            <StyledHeader>Requirements</StyledHeader>
                            <StyledImg src={Requirements} />
                        </HeaderImageContainer>
                        <StyledList>
                            {position.requirements.map((requirement, index) => {
                                return (
                                    <StyledListItem key={index}>
                                        <ArrowImage src={Arrow} />
                                        <StyledText>{requirement}</StyledText>
                                    </StyledListItem>
                                )
                            })}
                        </StyledList>
                    </Card>
                    {position.good_to_have.length > 1 ? (
                        <Card direction="column">
                            <HeaderImageContainer>
                                <StyledHeader>What’s good to have</StyledHeader>
                                <StyledImg src={GoodToHave} />
                            </HeaderImageContainer>
                            <StyledList>
                                {position.good_to_have.map((ability, index) => {
                                    return (
                                        <StyledListItem key={index}>
                                            <ArrowImage src={Arrow} />
                                            <StyledText>{ability}</StyledText>
                                        </StyledListItem>
                                    )
                                })}
                            </StyledList>
                        </Card>
                    ) : null}
                </JDContainer>
            </DescriptionContainerWrapper>
        </DescriptionContainer>
    )
}

export default Description
