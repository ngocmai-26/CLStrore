import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Header/style.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Header_Top from './Header/Header_top'
import Header_center from './Header/Header.center'
import Header_Nav from './Header/Header_nav'
import { Route, Routes, useLocation } from 'react-router'
import { PAGINATION, PATH_ROUTER } from './contants'
import VietNam from './Body/VietNam/VietNam'
import { useEffect, useState } from 'react'
import {
  list_Adjunct,
  list_China,
  List_Japan,
  list_Korea,
  list_ProductHome,
  list_User,
  list_VietNam,
  list_voucher,
} from './data'
import China from './Body/China/China'
import Korea from './Body/Korea/Korea'
import Adjunct from './Body/Adjunct/Adjunct'
import Japan from './Body/Japan/Japan'
import ProductItem from './Body/ProductItem'
import Home from './Body/Home/Home'
import Login from './Form/Login'
import Register from './Form/Register'
import Footer from './Footer/Footer'
import Pay from './Body/Pay/pay'
import Account from './Body/Account/account'
import History_Pro from './Body/History/product'

function App() {
  const { pathname } = useLocation()

  const [listProduct, setListProduct] = useState([])
  const [listProductHome, setListProductHome] = useState(list_ProductHome)
  const [listAdjunctHome, setListAdjunctHome] = useState(
    list_ProductHome.Adjunct,
  )

  const [productItem, setProductItem] = useState([])
  const [cart, setCart] = useState([])
  const [list_cart, setCartList] = useState([])
  const [listUser, setListUser] = useState([])
  // const [number, setNumber] = useState(0)
  const [search, setSearch] = useState('')
  const [display, setDisplay] = useState(false)
  const [listCommentItem, setListCommentItem] = useState([])

  //Account
  const [displayAccount, setDisplayAccount] = useState(false)

  const [account, setAccount] = useState([])
  const [link, setLink] = useState('/DangNhap')
  const [show, setShow] = useState(false)
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('account'))
    const carts = JSON.parse(localStorage.getItem('cart'))
    const list_carts = JSON.parse(localStorage.getItem('list_cart'))
    const list_comments = JSON.parse(localStorage.getItem('list_cmt'))
    const product_item = JSON.parse(localStorage.getItem('productItem'))
    const list_user = JSON.parse(localStorage.getItem('listUsers'))
    if (items) {
      setAccount(items)
    }
    if (carts) {
      setCart(carts)
    }
    if (list_carts) {
      setCartList(list_carts)
    }
    if (list_comments) {
      setListComment(list_comments)
    }
    if (product_item) {
      setProductItem(product_item)
    }
    if (list_user) {
      setListUser(list_user)
    }
  }, [])

  //form
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailRegister, setEmailRegister] = useState('')
  const [passwordRegister, setPasswordRegister] = useState('')
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [image, setImage] = useState('')

  //Pay
  const [voucherText, setVoucherText] = useState('')
  const [voucher, setVoucher] = useState(0)
  const [sumPrice, setSumPrice] = useState(0)

  const [addressBill, setAddressBill] = useState('')
  const [noteBill, setNoteBill] = useState('')
  const [nameBill, setNameBill] = useState('')
  const [phoneBill, setPhoneBill] = useState('')
  const [Bill, setBill] = useState([])
  const [historyBill, setHistoryBill] = useState([])


  /////////

  const [comment, setComment] = useState('')
  const [listComment, setListComment] = useState([])
  const [displayComment, setDisplayComment] = useState(false)

  /////////

  const [error, setError] = useState({
    isErrorPassword: false,
    isErrorEmail: false,
    messageErrorEmail: '',
    messageErrorPassword: '',
  })

  const [errorRegister, setErrorRegister] = useState({
    isErrorPassword: false,
    isErrorEmail: false,
    messageErrorEmail: '',
    messageErrorPassword: '',
    isErrorName: false,
    isErrorAddress: false,
    messageErrorName: '',
    messageErrorAddress: '',
  })

  const [errorBill, setErrorBill] = useState({
    isErrorPhone: false,
    isErrorName: false,
    isErrorAddress: false,
    messageErrorPhone: '',
    messageErrorName: '',
    messageErrorAddress: '',
  })

  const [product, setProduct] = useState(listProduct.slice(0, PAGINATION.LIMIT))
  const [productHome, setProductHome] = useState(
    listProductHome.Clothes.slice(0, PAGINATION.LIMITHOME),
  )

  const [adjunctHome, setAdjunctHome] = useState(
    listAdjunctHome.slice(0, PAGINATION.LIMITADJUNCT),
  )

  useEffect(() => {
    if (pathname === PATH_ROUTER.CHINA) {
      setListProduct(list_China)
    } else if (pathname === PATH_ROUTER.VIETNAM) {
      setListProduct(list_VietNam)
    } else if (pathname === PATH_ROUTER.KOREA) {
      setListProduct(list_Korea)
    } else if (pathname === PATH_ROUTER.ADJUNCT) {
      setListProduct(list_Adjunct)
    } else if (pathname === PATH_ROUTER.JAPAN) {
      setListProduct(List_Japan)
    }
  }, [pathname, listProduct])

  var onLogin = () => {
    let test_user = 0
    listUser.filter((el) => {
      if (email === '') {
        setError(
          (pre) =>
            (pre = {
              ...pre,
              isErrorEmail: true,
              messageErrorEmail: 'Hãy xem lại thông tin',
            }),
        )
      } else if (el.username !== email && email !== '') {
        test_user += 1
      }
      if (test_user === listUser.length) {
        setError(
          (pre) =>
            (pre = {
              ...pre,
              isErrorEmail: true,
              messageErrorEmail: 'Tài khoản không tồn tại',
            }),
        )
      } else if (el.username === email) {
        setError(
          (pre) =>
            (pre = {
              ...pre,
              isErrorEmail: false,
              messageErrorEmail: '',
            }),
        )
        if (el.password !== password && password !== '') {
          setError(
            (pre) =>
              (pre = {
                ...pre,
                isErrorPassword: true,
                messageErrorPassword: 'Mật khẩu sai',
              }),
          )
        } else if (el.password === password) {
          setError(
            (pre) =>
              (pre = {
                ...pre,
                isErrorPassword: false,
                messageErrorPassword: '',
              }),
          )
          setDisplayAccount(!displayAccount)
          setAccount(el)
          setShow(true)
          // localStorage.setItem('account', JSON.stringify(el));
        }
      }

      if (password === '') {
        setError(
          (pre) =>
            (pre = {
              ...pre,
              isErrorPassword: true,
              messageErrorPassword: 'Hãy xem lại thông tin',
            }),
        )
      }
    })
  }


  var handleClose = () => {
    setShow(false)
  }

  var onRegister = () => {
    var email_regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    var password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    if (passwordRegister === '') {
      setErrorRegister(
        (pre) =>
          (pre = {
            ...pre,
            isErrorPassword: true,
            messageErrorPassword: 'Không được bỏ trống',
          }),
      )
    } else if (password_regex.test(passwordRegister) === false) {
      setErrorRegister(
        (pre) =>
          (pre = {
            ...pre,
            isErrorPassword: true,
            messageErrorPassword:
              'Mật khẩu gồm ít nhất một chữ viết hoa, 1 chữ viết thường, chữ số, ký tự đặc biệt và có độ dài từ 8 đến 14 ký tự ',
          }),
      )
    } else {
      setErrorRegister(
        (pre) =>
          (pre = {
            ...pre,
            isErrorPassword: false,
            messageErrorPassword: 'Không được bỏ trống',
          }),
      )
    }

    if (name === '') {
      setErrorRegister(
        (pre) =>
          (pre = {
            ...pre,
            isErrorName: true,
            messageErrorName: 'Không được bỏ trống',
          }),
      )
    } else {
      setErrorRegister(
        (pre) =>
          (pre = {
            ...pre,
            isErrorName: false,
            messageErrorName: '',
          }),
      )
    }
    if (address === '') {
      setErrorRegister(
        (pre) =>
          (pre = {
            ...pre,
            isErrorAddress: true,
            messageErrorAddress: 'Không được bỏ trống',
          }),
      )
    } else {
      setErrorRegister(
        (pre) =>
          (pre = {
            ...pre,
            isErrorAddress: false,
            messageErrorAddress: '',
          }),
      )
    }
    if (emailRegister === '') {
      setErrorRegister(
        (pre) =>
          (pre = {
            ...pre,
            isErrorEmail: true,
            messageErrorEmail: 'Không được bỏ trống',
          }),
      )
    } else if (
      email_regex.test(emailRegister) === false &&
      emailRegister !== ''
    ) {
      setErrorRegister(
        (pre) =>
          (pre = {
            ...pre,
            isErrorEmail: true,
            messageErrorEmail: 'Email sai vui lòng kiểm tra lại',
          }),
      )
    } else {
      setErrorRegister(
        (pre) =>
          (pre = {
            ...pre,
            isErrorEmail: false,
            messageErrorEmail: '',
          }),
      )
    }

    listUser.filter((el) => {
      if (el.email === emailRegister) {
        setErrorRegister(
          (pre) =>
            (pre = {
              ...pre,
              isErrorEmail: true,
              messageErrorEmail: 'Email đã tồn tại',
            }),
        )
      }
    })

    if (
      errorRegister.isErrorEmail === false &&
      errorRegister.isErrorAddress === false &&
      errorRegister.isErrorPassword === false &&
      errorRegister.isErrorName === false
    ) {
      setShow(true)
      setListUser([
        ...listUser,
        {
          name,
          email: emailRegister,
          address: address,
          password: passwordRegister,
        },
      ])
    }
  }

  var onLogout = () => {
    if (list_cart.length === 0) {
      setCartList([
        ...list_cart,
        {
          cart: cart,
          account: account.username,
        },
      ])
    } else {
      const list = list_cart.filter((el) => {
        if (account.username === el.account) {
          el.cart = cart
          return el
        }
      })
      if (list.length === 0) {
        setCartList([
          ...list_cart,
          {
            cart: cart,
            account: account.username,
          },
        ])
      }
    }

    setAccount([])
    setDisplayAccount(!displayAccount)
    setCart([])
  }

  useEffect(() => {
    const filteredData = listProduct.filter((el) => {
      //if no input the return the original
      if (search === '') {
        return el
      }
      //return the item which contains the user input
      else {
        return el.name.toLowerCase().includes(search.toLowerCase())
      }
    })
    setProduct(filteredData)
    
  }, [search])

  const total = Math.ceil(listProduct.length / PAGINATION.LIMIT)

  const [pagination, setPagination] = useState({
    currentPage: PAGINATION.CURRENT_PAGE,
  })

  useEffect(() => {
    const newUser = [...listProduct].slice(
      (pagination.currentPage - 1) * PAGINATION.LIMIT,
      pagination.currentPage * PAGINATION.LIMIT,
    )
    setProduct((pre) => (pre = newUser))
  }, [pagination.currentPage, listProduct])

  const onChangePage = (currentPage) => {
    setPagination((pre) => ({
      ...pre,
      currentPage,
    }))
  }

  //Cart
  const onAddCart = (item) => {
    if (account.length === 0) {
      setShow(true)
    } else {
      let list_cart = cart.filter(
        (el) => el.name === item.name && el.id === item.id,
      )
      if (list_cart.length === 0) {
        setCart([
          ...cart,
          {
            ...item,
            quality: 1,
          },
        ])
      } else {
        let list_cart = cart.filter((el) =>
          item.id === el.id && item.name === el.name
            ? (el.quality += 1)
            : el.quality,
        )
        setCart(list_cart)
      }
    }
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    localStorage.setItem('list_cart', JSON.stringify(list_cart))
  }, [list_cart])

  const onIncrease = (item) => {
    let list_cart = cart.filter((el) =>
      item.id === el.id && item.name === el.name
        ? (el.quality += 1)
        : el.quality,
    )
    setCart(list_cart)
  }

  const onDecrease = (item) => {
    let list_cart = cart.filter((el) =>
      item.id === el.id && item.name === el.name
        ? (el.quality -= 1)
        : el.quality,
    )
    setCart(list_cart)
  }

  useEffect(() => {
    if (cart.length === 0) {
      setDisplay(true)
    } else {
      setDisplay(false)
    }
  }, [cart])

  /////////PAGE HOME
  // useEffect(() => {
  //   const filteredData = listProductHome.filter((el) => {
  //     //if no input the return the original
  //     if (search === '') {
  //       return el
  //     }
  //     //return the item which contains the user input
  //     else {
  //       return el.name.toLowerCase().includes(search.toLowerCase())
  //     }
  //   })
  //   setProduct(filteredData)
  // }, [search])

  const totalHome = Math.ceil(
    listProductHome.Clothes.length / PAGINATION.LIMITHOME,
  )

  const [paginationHome, setPaginationHome] = useState({
    currentPage: PAGINATION.CURRENT_PAGE,
  })

  useEffect(() => {
    const newUser = [...listProductHome.Clothes].slice(
      (paginationHome.currentPage - 1) * PAGINATION.LIMITHOME,
      paginationHome.currentPage * PAGINATION.LIMITHOME,
    )
    setProductHome((pre) => (pre = newUser))
  }, [paginationHome.currentPage, listProductHome])

  const onChangePageHome = (currentPage) => {
    setPaginationHome((pre) => ({
      ...pre,
      currentPage,
    }))
  }

  const onSeeMore = () => {
    // adjunctHome.push(listAdjunctHome.slice(adjunctHome.length, PAGINATION.LIMITHOME*4))
    setAdjunctHome(
      (pre) =>
        (pre = adjunctHome.concat(
          listAdjunctHome.slice(
            adjunctHome.length,
            adjunctHome.length + PAGINATION.LIMITADJUNCT,
          ),
        )),
    )
  }

  const onVoucher = () => {
    list_voucher.filter((el) => {
      if (el.code === voucherText) {
        setVoucher(el.price)
      }
    })
  }

  useEffect(() => {
    let sum = 0
    cart.map((el) => (sum += +el.price * el.quality))
    setSumPrice(sum - voucher)
  }, [cart, voucher])

  const onBill = () => {
    var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g

    if (nameBill === '') {
      setErrorBill(
        (pre) =>
          (pre = {
            ...pre,
            isErrorName: true,
            messageErrorName: 'Không được bỏ trống',
          }),
      )
    } else {
      setErrorBill(
        (pre) =>
          (pre = {
            ...pre,
            isErrorName: false,
            messageErrorName: '',
          }),
      )
    }

    if (phoneBill === '') {
      setErrorBill(
        (pre) =>
          (pre = {
            ...pre,
            isErrorPhone: true,
            messageErrorPhone: 'Không được bỏ trống',
          }),
      )
    } else if (vnf_regex.test(phoneBill) === false && phoneBill !== '') {
      setErrorBill(
        (pre) =>
          (pre = {
            ...pre,
            isErrorPhone: true,
            messageErrorPhone: 'Số điện thoại không chính xác',
          }),
      )
    } else {
      setErrorBill(
        (pre) =>
          (pre = {
            ...pre,
            isErrorPhone: false,
            messageErrorPhone: '',
          }),
      )
    }

    if (addressBill === '') {
      setErrorBill(
        (pre) =>
          (pre = {
            ...pre,
            isErrorAddress: true,
            messageErrorAddress: 'Không được bỏ trống',
          }),
      )
    } else {
      setErrorBill(
        (pre) =>
          (pre = {
            ...pre,
            isErrorAddress: false,
            messageErrorAddress: '',
          }),
      )
    }

    if (
      errorBill.isErrorAddress === false &&
      errorBill.isErrorName === false &&
      errorBill.isErrorPhone === false
    ) {
      setShow(true)
      setCart([])
      return setBill([
        ...Bill,
        {
          nameBill,
          phoneBill,
          addressBill,
          noteBill,
          product: cart,
          email: account.username,
        },
      ])
    }
  }

  const onHistoryPro = () => {
    const newList = Bill.filter((el) => el.email === account.username)
    setHistoryBill(newList)
  }

  const onClickComment = () => {

    if(account.length===0) {
      setListComment([
        ...listComment,
        {
          product: productItem,
          account: {name: "Khách Hàng"},
          comment: comment,
        },
      ])
    }
    else {
      setListComment([
        ...listComment,
        {
          product: productItem,
          account: account,
          comment: comment,
        },
      ])
    }
  }

  
  useEffect(() => {
    const new_comment = listComment.filter((el) => el.product.id === productItem.id && el.product.name === productItem.name)
    setListCommentItem(new_comment)
  }, [listComment.length, productItem])


  useEffect(() => {
    if (listCommentItem.length === 0) {
      setDisplayComment(false)
    } else {
      setDisplayComment(true)
    }
  }, [listCommentItem])

  useEffect(() => {
    localStorage.setItem('list_cmt', JSON.stringify(listComment))
  }, [listComment])


  ///
  useEffect(() => {
    localStorage.setItem('productItem', JSON.stringify(productItem))

  }, [productItem])

  useEffect(() => {
    localStorage.setItem('account', JSON.stringify(account))
    if (account.length !== 0) {
      setDisplayAccount(true)
    } else {
      setDisplayAccount(false)
    }
    list_cart.filter((el) => {
      if (el.account === account.username) {
        setCart(el.cart)
      }
    })
  }, [account])

  useEffect(() => {
    localStorage.setItem('listUsers', JSON.stringify(list_User))
  }, [list_User])

  return (
    <div className="App">
      <Header_Top />
      <Header_center
        cart={cart}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        setSearch={setSearch}
        display={display}
        displayAccount={displayAccount}
        account={account}
        onLogout={onLogout}
        link={link}
        onHistoryPro={onHistoryPro}
      />
      <Header_Nav />
      <Routes>
        <Route
          path={PATH_ROUTER.HOME}
          element={
            <Home
              home={productHome}
              total={totalHome}
              onChangePage={onChangePageHome}
              currentPage={paginationHome.currentPage}
              listAdjunct={adjunctHome}
              onSeeMore={onSeeMore}
            />
          }
        />
        <Route
          path={PATH_ROUTER.VIETNAM}
          element={
            <VietNam
              vietnam={product}
              total={total}
              onChangePage={onChangePage}
              currentPage={pagination.currentPage}
              setProductItem={setProductItem}
              onAddCart={onAddCart}
              show={show}
              handleClose={handleClose}
            />
          }
        />
        <Route
          path={PATH_ROUTER.CHINA}
          element={
            <China
              china={product}
              total={total}
              onChangePage={onChangePage}
              currentPage={pagination.currentPage}
              setProductItem={setProductItem}
              onAddCart={onAddCart}
              show={show}
              handleClose={handleClose}
            />
          }
        />
        <Route
          path={PATH_ROUTER.KOREA}
          element={
            <Korea
              korea={product}
              total={total}
              onChangePage={onChangePage}
              currentPage={pagination.currentPage}
              setProductItem={setProductItem}
              onAddCart={onAddCart}
              show={show}
              handleClose={handleClose}
            />
          }
        />
        <Route
          path={PATH_ROUTER.JAPAN}
          element={
            <Japan
              japan={product}
              total={total}
              onChangePage={onChangePage}
              currentPage={pagination.currentPage}
              setProductItem={setProductItem}
              onAddCart={onAddCart}
              show={show}
              handleClose={handleClose}
            />
          }
        />
        <Route
          path={PATH_ROUTER.ADJUNCT}
          element={
            <Adjunct
              adjunct={product}
              total={total}
              onChangePage={onChangePage}
              currentPage={pagination.currentPage}
              setProductItem={setProductItem}
              onAddCart={onAddCart}
              show={show}
              handleClose={handleClose}
            />
          }
        />
        <Route
          path={PATH_ROUTER.PRODUCTITEM}
          element={
            <ProductItem
              productItem={productItem}
              setComment={setComment}
              onClickComment={onClickComment}
              listComment={listCommentItem}
              displayComment={displayComment}
            />
          }
        />
        <Route
          path={PATH_ROUTER.LOGIN}
          element={
            <Login
              setPassword={setPassword}
              setEmail={setEmail}
              onLogin={onLogin}
              error={error}
              link={link}
              show={show}
              handleClose={handleClose}
            />
          }
        />
        <Route
          path={PATH_ROUTER.REGISTER}
          element={
            <Register
              setAddress={setAddress}
              setPassword={setPasswordRegister}
              setEmail={setEmailRegister}
              setName={setName}
              onRegister={onRegister}
              errorRegister={errorRegister}
              show={show}
              handleClose={handleClose}
              setImage={setImage}
            />
          }
        />
        <Route
          path={PATH_ROUTER.PAY}
          element={
            <Pay
              cart={cart}
              setVoucherText={setVoucherText}
              onVoucher={onVoucher}
              voucher={voucher}
              sumPrice={sumPrice}
              account={account}
              setAddressBill={setAddressBill}
              setNameBill={setNameBill}
              setPhoneBill={setPhoneBill}
              onBill={onBill}
              errorBill={errorBill}
              setNoteBill={setNoteBill}
              show={show}
              handleClose={handleClose}
            />
          }
        />

        <Route
          path={PATH_ROUTER.ACCOUNT}
          element={
            <Account
              account={account}
            />
          }
        />
        <Route
          path={PATH_ROUTER.HISTORY}
          element={<History_Pro historyBill={historyBill} />}
        />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
