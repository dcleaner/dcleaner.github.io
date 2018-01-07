import React from 'react';
import './price.component.css';

import { Grid, Card, Icon, Button } from 'semantic-ui-react';

export default function PriceComponent(){
    return (
        <div className='Price'>
            <Grid centered={ true }>
                <Grid.Column  mobile={ 5 } tablet={ 5 } computer={ 5 }>
                    <div className='Price__Card__Wrapper'>
                        <Card className='Price__Card'>
                            <div className='Price__Header'>
                                <h1>Bronse</h1>
                            </div>
                            <Card.Content>
                            <Card.Header>브론즈</Card.Header>
                            <Card.Meta>
                                <span>기본 제공가</span>
                            </Card.Meta>
                            <Card.Description>
                                글, 덧글 1당 1원 책정
                            </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Icon />
                                최초 1주일간 제공
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
                                <span>다중 계정 허용</span>
                            </Card.Meta>
                            <Card.Description>
                                ₩ 30,000
                            </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Icon />
                                최초 구매 후 무기한
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
                            <span>키 제한 없는 프로그램 제공</span>
                        </Card.Meta>
                        <Card.Description>
                            ₩ 50,000
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Icon />
                            라이센스 발급
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column  width={ 14 }>
                    <div className='Price__Buy__Wrapper'>
                        <Button className='Price__Buy__Button' size='massive' color='violet'>
                            구매하기
                        </Button>
                    </div>
                </Grid.Column>
            </Grid>
        </div>
    );
}