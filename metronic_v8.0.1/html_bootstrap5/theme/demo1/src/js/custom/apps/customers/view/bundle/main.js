"use strict";

// On document ready
KTUtil.onDOMContentLoaded(function () {
	KTCustomerViewPaymentTable.init();
    KTCustomerViewInvoices.init();
	KTCustomerViewStatements.init();
	KTCustomerViewPaymentMethod.init();
	KTModalAddPayment.init();
	KTModalAdjustBalance.init();
	KTModalUpdateCustomer.init();	
});