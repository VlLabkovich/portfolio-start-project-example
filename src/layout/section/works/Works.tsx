import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import socialImg from '../../../assets/images/proj-1.webp'
import timerImg from '../../../assets/images/proj-2.webp'
import {TabMenu} from "./tabMenu/TabMenu";
import {Work} from "./work/Work";
import {Container} from "../../../components/Container";
import {S} from "./Works_Styles"

const workItems = ['All', 'landing page', 'React', 'spa'];

const workData = [
    {
        title: "Social Network",
        src: socialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        title: "Timer",
        src: timerImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"
    }];


export const Works: React.FC = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={workItems}/>
                <FlexWrapper justify={"space-between"} align={'flex-start'} wrap={'wrap'}>

                    {workData.map((w) => {
                        return <Work title={w.title}
                                  text={w.text}
                                  src={w.src}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};