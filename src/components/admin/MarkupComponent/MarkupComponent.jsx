import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { dishPricing } from '../../../helpers/hooks/dishPricing';
import {
  ButtonChange,
  DeleteButton,
  Description,
  Gram,
  Img,
  Item,
  List,
  NameDish,
  OldPrice,
  Price,
  Wrapper,
  WrapperButton,
  WrapperDescription,
  WrapperPrice,
} from './MarkupComponent.styled';
import { useDispatch } from 'react-redux';
import { deleteDish } from '../../../redux/dishes/operation';

export const MarkupComponent = ({ list, mainPage }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const handelDelete = (id) => {
    dispatch(deleteDish(id));
  };

  return (
    <>
      <List $positionContent={(!mainPage).toString()}>
        {list?.map((dish) => {
          const { finalPrice } = dishPricing(dish);
          return (
            <Item key={dish._id}>
              <Img
                src={dish.image}
                alt={dish.name}
                loading="lazy"
                width="260"
              />
              <Wrapper>
                <WrapperDescription>
                  <NameDish>{dish.name}</NameDish>
                  <Description>{dish.description}</Description>
                  <Gram>{dish.gram}g</Gram>
                </WrapperDescription>
                <WrapperPrice>
                  <div>
                    {dish.discounted !== 0 && (
                      <>
                        <OldPrice>Old price: {dish.price} </OldPrice>
                        <OldPrice>Discounted: {dish.discounted}%</OldPrice>
                      </>
                    )}
                    <Price>Price: {finalPrice}</Price>
                  </div>
                  <WrapperButton>
                    <DeleteButton
                      type="button"
                      onClick={() => handelDelete(dish._id)}
                    >
                      <MdOutlineDeleteForever />
                    </DeleteButton>
                    <ButtonChange
                      to={`/admin/change/${dish._id}`}
                      state={{ from: location }}
                    >
                      Change
                    </ButtonChange>
                  </WrapperButton>
                </WrapperPrice>
              </Wrapper>
            </Item>
          );
        })}
      </List>
    </>
  );
};

MarkupComponent.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      discounted: PropTypes.number,
      description: PropTypes.string,
      price: PropTypes.number,
      gram: PropTypes.number,
      specificsDish: PropTypes.object,
      image: PropTypes.string,
      _id: PropTypes.string,
    }),
  ).isRequired,
  mainPage: PropTypes.bool,
};
