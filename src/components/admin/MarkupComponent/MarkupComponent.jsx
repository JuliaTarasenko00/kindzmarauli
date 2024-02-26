import PropTypes from 'prop-types';
import { dishPricing } from '../../../helpers/hooks/dishPricing';
import { MdOutlineDeleteForever } from 'react-icons/md';
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
import { useLocation } from 'react-router-dom';
import { $instants } from '../../../redux/requests';

export const MarkupComponent = ({ list, mainPage }) => {
  const location = useLocation();

  const handelDelete = async (id) => {
    try {
      await $instants.delete(`/dishes/${id}`);
    } catch (error) {
      console.log('aaaa');
      console.log(error);
    }
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

                    {/* <button
                      onClick={() => navigate(`/admin/change/${dish._id}`)}
                    >
                      Change
                    </button> */}
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
