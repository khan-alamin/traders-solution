package com.prologiccreations.traderssolution.controller.data;

import com.prologiccreations.traderssolution.controller.super_classes.CrudController;
import com.prologiccreations.traderssolution.dto.Response;
import com.prologiccreations.traderssolution.model.data.AuditTrail;
import com.prologiccreations.traderssolution.service.super_classes.data.AuditTrailService;
import com.prologiccreations.traderssolution.utils.PageUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("auditTrail/")
public class AuditTrailController implements CrudController<AuditTrail, Long> {
    private final AuditTrailService AuditTrailService;

    @Override
    public ResponseEntity<Response> storeData(AuditTrail data) {
        Response response = AuditTrailService.storeData(data);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response<Page<AuditTrail>>> getAll(Integer pageNumber, Integer pageSize, String sortDirection, String sortColumns) {
        Pageable pageable = PageUtil.getPageable(pageNumber, pageSize, sortDirection, sortColumns);
        Response<Page<AuditTrail>> response = AuditTrailService.getAll(pageable);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response<AuditTrail>> getOne(Long id) {
        Response<AuditTrail> response = AuditTrailService.getById(id);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response> delete(Long id) {
        Response response = AuditTrailService.delete(id);
        return ResponseEntity.ok(response);
    }
}