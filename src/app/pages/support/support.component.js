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
                            content='API키 등록 후 다운 받으실 수 있습니다'
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
                                    Q. 글, 덧글 1당 1원이라는 것은 갤로그를 포함한 가격인가요?
                                </Header.Subheader>
                            }
                            position='right top'                            
                            content='갤로그를 포함한 책정가입니다'
                            inverted
                        />
                    </Header>
                </Grid.Column>
                <Grid.Column  mobile={ 14 } tablet={ 7 } computer={ 7 }>
                    <Header as='h3'>
                        키발급 관련 질문
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
                    </Header>
                </Grid.Column>
            </Grid>
        </div>
    );
}