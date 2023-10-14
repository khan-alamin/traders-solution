package com.prologiccreations.traderssolution.controller.config;

import com.prologiccreations.traderssolution.controller.super_classes.CrudController;
import com.prologiccreations.traderssolution.dto.Response;
import com.prologiccreations.traderssolution.model.config.Customer;
import com.prologiccreations.traderssolution.service.super_classes.config.CustomerService;
import com.prologiccreations.traderssolution.utils.PageUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("customer/")
public class CustomerController implements CrudController<Customer, Long> {
    private final CustomerService CustomerService;

    @Override
    public ResponseEntity<Response> storeData(Customer data) {
        Response response = CustomerService.storeData(data);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response<Page<Customer>>> getAll(Integer pageNumber, Integer pageSize, String sortDirection, String sortColumns) {
        Pageable pageable = PageUtil.getPageable(pageNumber, pageSize, sortDirection, sortColumns);
        Response<Page<Customer>> response = CustomerService.getAll(pageable);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response<Customer>> getOne(Long id) {
        Response<Customer> response = CustomerService.getById(id);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response> delete(Long id) {
        Response response = CustomerService.delete(id);
        return ResponseEntity.ok(response);
    }
}
