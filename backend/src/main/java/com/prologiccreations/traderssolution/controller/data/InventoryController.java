package com.prologiccreations.traderssolution.controller.data;

import com.prologiccreations.traderssolution.controller.super_classes.CrudController;
import com.prologiccreations.traderssolution.dto.Response;
import com.prologiccreations.traderssolution.model.data.Inventory;
import com.prologiccreations.traderssolution.service.super_classes.data.InventoryService;
import com.prologiccreations.traderssolution.utils.PageUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("inventory/")
public class InventoryController implements CrudController<Inventory, Long> {
    private final InventoryService InventoryService;

    @Override
    public ResponseEntity<Response> storeData(Inventory data) {
        Response response = InventoryService.storeData(data);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response<Page<Inventory>>> getAll(Integer pageNumber, Integer pageSize, String sortDirection, String sortColumns) {
        Pageable pageable = PageUtil.getPageable(pageNumber, pageSize, sortDirection, sortColumns);
        Response<Page<Inventory>> response = InventoryService.getAll(pageable);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response<Inventory>> getOne(Long id) {
        Response<Inventory> response = InventoryService.getById(id);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response> delete(Long id) {
        Response response = InventoryService.delete(id);
        return ResponseEntity.ok(response);
    }
}
