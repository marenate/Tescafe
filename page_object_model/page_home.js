import {dataCreateAccount} from '../helpers/data';
import {Selector} from 'testcafe';
console.log("que es lo del nom", dataCreateAccount.firstName+ +dataCreateAccount.lastName);
class PageMiCuenta{
    constructor(){
            this.selectors = {
            viewAccount_Link: Selector('a').withText(dataCreateAccount.firstName+' '+dataCreateAccount.lastName),   
            dressBtn: Selector('a').withText("Dresses"),
            womenBtn: Selector('a').withText("Women"),
            t_ShirtsBtn: Selector('a').withText("T-shirts"),
            dressSectionLbl: Selector('#center_column > h1 > span.cat-name'),
            sortBySelect: Selector('#selectProductSort'),
            selectPinkDress: Selector('#center_column > ul > li.ajax_block_product.col-xs-12.col-sm-6.col-md-4.first-in-line.first-item-of-tablet-line.first-item-of-mobile-line > div > div.left-block > div > a.product_img_link'),
            quantityTxt: Selector('#quantity_wanted'),
            dropDownSize: Selector('#group_1'),
            addToCart: Selector('#add_to_cart > button'),
            layerCardFlyout: Selector('#layer_cart'),
            proceedCheckoutSummaryBtn: Selector('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a'),
            shoppingCartSummaryLbl: Selector('#cart_title'),
            proceedToCheckOutSignInBtn: Selector('#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium'),
            deliveryAddressTitleLbl: Selector('#address_delivery > li.address_title'),
            proceedCheckoutAddressBtn: Selector('#center_column > form > p > button'),
            carrierTitleShippingLbl: Selector('#form > div > div.delivery_options_address > p'),
            termsServicesCheckBox: Selector('#cgv'),
            proceedCheckoutShippingBtn: Selector('#form > p > button'),
            choosePaymentMethodDialog: Selector('#center_column'),
            choosePaymentMethodTitle: Selector('#center_column > h1'),
            totalToPayLbl: Selector('#cart_summary > tfoot > tr:nth-child(5) > td.total_price_container.text-right'),
            totalAmountToPay: Selector('#total_price_container')
          
        }
    }
}

export default new PageMiCuenta();