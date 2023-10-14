package com.prologiccreations.traderssolution.controller.data;

import com.prologiccreations.traderssolution.controller.super_classes.CrudController;
import com.prologiccreations.traderssolution.dto.Response;
import com.prologiccreations.traderssolution.model.data.Purchase;
import com.prologiccreations.traderssolution.service.super_classes.data.PurchaseService;
import com.prologiccreations.traderssolution.utils.PageUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("purchase/")
public class PurchaseController implements CrudController<Purchase, Long> {
    private final PurchaseService PurchaseService;

    @Override
    public ResponseEntity<Response> storeData(Purchase data) {
        Response response = PurchaseService.storeData(data);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response<Page<Purchase>>> getAll(Integer pageNumber, Integer pageSize, String sortDirection, String sortColumns) {
        Pageable pageable = PageUtil.getPageable(pageNumber, pageSize, sortDirection, sortColumns);
        Response<Page<Purchase>> response = PurchaseService.getAll(pageable);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response<Purchase>> getOne(Long id) {
        Response<Purchase> response = PurchaseService.getById(id);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response> delete(Long id) {
        Response response = PurchaseService.delete(id);
        return ResponseEntity.ok(response);
    }
}
