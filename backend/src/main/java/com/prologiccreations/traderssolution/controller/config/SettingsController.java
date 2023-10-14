package com.prologiccreations.traderssolution.controller.config;

import com.prologiccreations.traderssolution.controller.super_classes.CrudController;
import com.prologiccreations.traderssolution.dto.Response;
import com.prologiccreations.traderssolution.model.config.Settings;
import com.prologiccreations.traderssolution.service.super_classes.config.SettingsService;
import com.prologiccreations.traderssolution.utils.PageUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("settings/")
public class SettingsController implements CrudController<Settings, Long> {
    private final SettingsService SettingsService;

    @Override
    public ResponseEntity<Response> storeData(Settings data) {
        Response response = SettingsService.storeData(data);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response<Page<Settings>>> getAll(Integer pageNumber, Integer pageSize, String sortDirection, String sortColumns) {
        Pageable pageable = PageUtil.getPageable(pageNumber, pageSize, sortDirection, sortColumns);
        Response<Page<Settings>> response = SettingsService.getAll(pageable);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response<Settings>> getOne(Long id) {
        Response<Settings> response = SettingsService.getById(id);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response> delete(Long id) {
        Response response = SettingsService.delete(id);
        return ResponseEntity.ok(response);
    }
}
