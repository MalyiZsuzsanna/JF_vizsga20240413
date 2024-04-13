import React from 'react'
import {Card,CardBody,CardTitle,CardSubtitle,CardText,Button} from 'reactstrap'

export const SinglePropertie = ({id,category,sellerName,createAt,imageUrl,area,rooms}) => {
  console.log(category)
  return (
    <div>
      <Card key={id}
  style={{
    width: '18rem',height:'100%'
  }}
>
  <img
    className="img-fluid img-thumbnail"
    alt="Sample"
    src={imageUrl}
  />
  <CardBody style={{display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
    <CardTitle tag="h5">
      {category}
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      A hirdetés feladásának <br />dátuma: {createAt}
    </CardSubtitle>
    <CardText style={{borderTop:'1px solid #c7d2fe'}}>
      Szobák száma: {rooms} 
    </CardText>
    <CardText style={{borderTop:'1px solid #c7d2fe'}}>
      Alapterület: {area} m<sup>2</sup>
    </CardText>
    <Button>
      {sellerName}📧
    </Button>
  </CardBody>
</Card>
    </div>
  )
}

