import React from 'react';
import './price.component.css';

import { Grid, Card, Icon, Button } from 'semantic-ui-react';

export default function PriceComponent(){

    var onKaKao = () => window.open('https://pf.kakao.com/_gBPuC');
    
    return (
        <div className='Price'>
            <Grid stackable centered={ true }>
                <Grid.Column  mobile={ 5 } tablet={ 5 } computer={ 5 }>
                    <div className='Price__Card__Wrapper'>
                        <Card className='Price__Card'>
                            <div className='Price__Header'>
                                <h1>Bronze</h1>
                            </div>
                            <Card.Content>
                            <Card.Header>브론즈</Card.Header>
                            <Card.Meta>
                                <span>기본 제공가</span>
                            </Card.Meta>
                            <Card.Description>
                                ₩ 9,000
                            </Card.Description>

                            </Card.Content>
                            <Card.Content extra>
                                <Icon />
                                최초 구매후 1주일간
                            </Card.Content>
                        </Card>
                    </div>
                </Grid.Column>
                <Grid.Column  mobile={ 5 } tablet={ 5 } computer={ 5 }>
                    <div className='Price__Card__Wrapper'>
                        <Card className='Price__Card'>
                            <div className='Price__Header'>
                                <h1>Silver</h1>
                            </div>
                            <Card.Content>
                            <Card.Header>실버</Card.Header>
                            <Card.Meta>
                                <span>기본 제공가</span>
                            </Card.Meta>
                            <Card.Description>
                                ₩ 11,000
                            </Card.Description>

                            </Card.Content>
                            <Card.Content extra>
                                <Icon />
                                최초 구매 후 6개월간
                            </Card.Content>
                        </Card>
                    </div>
                </Grid.Column>
                <Grid.Column  mobile={ 5 } tablet={ 5 } computer={ 5 }>
                    <Card className='Price__Card'>
                        <div className='Price__Header'>
                            <h1>Gold</h1>
                        </div>
                        <Card.Content>
                        <Card.Header>골드</Card.Header>
                        <Card.Meta>
                            <span>다중 계정 추가 x 3 → x 5</span>
                        </Card.Meta>
                        <Card.Description>
                            ₩ 15,000
                        </Card.Description>

                        </Card.Content>
                        <Card.Content extra>
                            <Icon />
                            최초 구매 후 1년간
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column  width={ 14 }>
                    <div className='Price__Buy__Wrapper'>
                        <h4>프로그램 미구매 삭제 대행 지원 (작성글, 덧글 1당 2원 책정)</ h4>
                        <Button className='Price__Buy__Button' size='massive' color='violet' onClick={ onKaKao }>
                            구매문의
                        </Button>
                        <h4 className='Price__Buy__Comment__Sub'>구매는 플러스친구 문의바랍니다.</ h4>
                    </div>
                </Grid.Column>
            </Grid>
        </div>
    );
}