import React from 'react';
import './support.component.css';
import { Grid, Header, Popup } from 'semantic-ui-react';

export default function SupportComponent(){
    return (
        <div className='Support'>
            <Grid centered={ true }>
                <Grid.Column  mobile={ 14 } tablet={ 15 } computer={ 15 }>
                    <div className='Support__Title'>
                        <h1>자주 묻는 질문</h1>
                    </div>
                </Grid.Column>
                <Grid.Column  mobile={ 14 } tablet={ 7 } computer={ 7 }>
                    <Header as='h3'>
                        공통질문
                        <Popup
                            trigger = {
                                <Header.Subheader className='Support__Subheader'>
                                    Q. 구매를 하면 디시클리너 프로그램이 함께 제공되나요?
                                </Header.Subheader>
                            }
                            position='right top'                            
                            content='Access Token과 동봉하여 발송됩니다'
                            inverted
                        />
                        <Popup
                            trigger = {
                                <Header.Subheader className='Support__Subheader'>
                                    Q. 키발급은 어디서 받나요?
                                </Header.Subheader>
                            }
                            position='right center'                            
                            content='< 내 제품키 확인 > 메뉴를 확인해주세요'
                            inverted
                        />                   
                    </Header>
                </Grid.Column>
                <Grid.Column  mobile={ 14 } tablet={ 7 } computer={ 7 }>
                    <Header as='h3'>
                        가격정책 관련 질문
                        <Popup
                            trigger = {
                                <Header.Subheader className='Support__Subheader'>
                                    Q. Bronze 구매 시 갤로그 포함 모든 글, 덧글을 지울 수 있나요?
                                </Header.Subheader>
                            }
                            position='right top'                            
                            content='네 그렇습니다.'
                            inverted
                        />
                        <Popup
                            trigger = {
                                <Header.Subheader className='Support__Subheader'>
                                    Q. 다중 계정 추가는 뭔가요?
                                </Header.Subheader>
                            }
                            position='right center'                            
                            content='클리너는 1대의 계정에 영속됩니다'
                            inverted
                        />
                        <Popup
                            trigger = {
                                <Header.Subheader className='Support__Subheader'>
                                    Q. 2019년 2월 7일 기준으로 가격정책이 변경되었나요?
                                </Header.Subheader>
                            }
                            position='right top'                            
                            content='모든 가격 정책이 50% 할인되었습니다.'
                            inverted
                        />
                    </Header>
                </Grid.Column>
                <Grid.Column  mobile={ 14 } tablet={ 7 } computer={ 7 }>
                    <Header as='h3'>
                        2019년 정책 변경사항
                        <Popup
                        trigger = {
                            <Header.Subheader className='Support__Subheader'>
                                Q. 변경된 사항이 뭔가요?
                            </Header.Subheader>
                        }
                        position='right center'                            
                        content='모든 가격 정책이 50% 할인되었습니다.'
                        inverted
                        />
                        <Popup
                        trigger = {
                            <Header.Subheader className='Support__Subheader'>
                                Q. 다중계정 수가 달라졌나요?
                            </Header.Subheader>
                        }
                        position='right center'                            
                        content='네, 기존 3대에서 5대로 변경되었습니다.'
                        inverted
                        />
                        <Popup
                        trigger = {
                            <Header.Subheader className='Support__Subheader'>
                                Q. 2019년 디시인사이드 개편 후에도 정상적으로 작동하나요?
                            </Header.Subheader>
                        }
                        position='right center'                            
                        content='네, 갤로그기반 삭제, 마이너갤러리, 유동닉 모두 정상적으로 작동합니다.'
                        inverted
                        />                        
                    </Header>
                </Grid.Column>
                <Grid.Column  mobile={ 14 } tablet={ 7 } computer={ 7 }>
                    <Header as='h3'>
                        기타 질문
                        <Popup
                        trigger = {
                            <Header.Subheader className='Support__Subheader'>
                                Q. 유동닉도 가능한가요?
                            </Header.Subheader>
                        }
                        position='right center'                            
                        content='네 가능합니다. (2/28일자 업데이트)'
                        inverted
                    />
                    <Popup
                        trigger = {
                            <Header.Subheader className='Support__Subheader'>
                                Q. 마이너갤 가능한가요?
                            </Header.Subheader>
                        }
                        position='right center'                            
                        content='네 가능합니다. (2/13일자 업데이트)'
                        inverted
                    />
                    <Popup
                        trigger = {
                            <Header.Subheader className='Support__Subheader'>
                                Q. 갤로그에 없는 기록도 지울 수 있나요?
                            </Header.Subheader>
                        }
                        position='right center'                            
                        content='네 가능합니다. (2/13일자 업데이트)'
                        inverted
                    />
                    </Header>
                </Grid.Column>         
            </Grid>
        </div>
    );
}