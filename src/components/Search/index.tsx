import React, { useState, ChangeEvent, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { IApplicationState } from '../../store';
import { setProduct } from '../../store/modules/product/action';
import { IProduct } from '../../store/modules/product/types';
import { openSearch } from '../../store/modules/sidebar/actions';
import Sidebar from '../Sidebar';

import {
  Container,
  SearchInput,
  SearchItens,
  SearchNone,
  SearchedProducts,
  SearchedProductsImage,
  SearchedProductsName,
  SearchedProductsInfo,
  SearchedProductsPriceWrapper,
  SearchedProductsPrice,
  SearchedProductsInstallments,
} from './styles';

let time = 0;

const Search: React.FC = () => {
  const open = useSelector<IApplicationState>(
    state => state.sidebar.data.openSearch,
  );

  const dispatch = useDispatch();
  const history = useHistory();

  const [allProducts, setAllProducts] = useState<IProduct[]>([]);
  const [searchedProducts, setSearchedProducts] = useState<IProduct[]>([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog')
      .then(response => response.json())
      .then(response => setAllProducts(response));
  }, []);

  function handleKeyDownSearch(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    setSearchValue(value);

    if (value.length < 3) return;

    clearTimeout(time);

    time = setTimeout(() => {
      const filterProducts = allProducts.filter(p =>
        p.name.toUpperCase().includes(value.toUpperCase()),
      );

      setSearchedProducts(filterProducts);

      if (value === '') setSearchedProducts([]);
    }, 500);
  }

  function handleClick(product: IProduct) {
    dispatch(setProduct(product));

    dispatch(openSearch(false));

    history.push('/product');
  }

  return (
    <>
      {open && (
        <Sidebar title="Buscar Produtos">
          <Container>
            <SearchInput
              type="text"
              placeholder="Buscar produtos por..."
              onChange={handleKeyDownSearch}
              value={searchValue}
            />
            <SearchItens>
              {searchedProducts.length === 0 ? (
                <SearchNone>
                  <span>Nenhum item encontrado :/</span>
                </SearchNone>
              ) : (
                searchedProducts.map(p => (
                  <SearchedProducts onClick={() => handleClick(p)}>
                    <SearchedProductsInfo>
                      <SearchedProductsImage src={p.image} alt={p.name} />
                      <SearchedProductsName>{p.name}</SearchedProductsName>
                    </SearchedProductsInfo>
                    <SearchedProductsPriceWrapper>
                      <SearchedProductsPrice>
                        {p.regular_price}
                      </SearchedProductsPrice>
                      <SearchedProductsInstallments>
                        {p.installments}
                      </SearchedProductsInstallments>
                    </SearchedProductsPriceWrapper>
                  </SearchedProducts>
                ))
              )}
            </SearchItens>
          </Container>
        </Sidebar>
      )}
    </>
  );
};

export default Search;
