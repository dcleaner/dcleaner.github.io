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
                    </Header>
                </Grid.Column>
                <Grid.Column  mobile={ 14 } tablet={ 7 } computer={ 7 }>
                    <Header as='h3'>
                        삭제 대행 관련 질문
                        <Popup
                            trigger = {
                                <Header.Subheader className='Support__Subheader'>
                                    Q. 글, 덧글 1당 2원이라는 것은 갤로그를 포함한 가격인가요?
                                </Header.Subheader>
                            }
                            position='right top'                            
                            content='갤로그를 포함한 책정가입니다'
                            inverted
                        />
                        <Popup
                            trigger = {
                                <Header.Subheader className='Support__Subheader'>
                                    Q. 얼마나 걸리나요?
                                </Header.Subheader>
                            }
                            position='right top'                            
                            content='한시간 이내입니다.'
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
                        content='불가능합니다'
                        inverted
                    />
                    <Popup
                        trigger = {
                            <Header.Subheader className='Support__Subheader'>
                                Q. 마이너갤 가능한가요?
                            </Header.Subheader>
                        }
                        position='right center'                            
                        content='추후 지원될 예정입니다'
                        inverted
                    />
                    </Header>
                </Grid.Column>
            </Grid>
        </div>
    );
}